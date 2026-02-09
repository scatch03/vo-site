import styles from './JwtSpringBootPage.module.scss';
import heroImage from '../../assets/jwt.png';
import jwtAuthFlowDiagram from '../../assets/jwt-auth-flow.svg';
import jwtTokenLifecycleDiagram from '../../assets/jwt-token-lifecycle.svg';

const JwtSpringBootPage = () => {
  return (
    <article className={styles.post}>
      <a className={styles.post__backLink} href="/">
        &lt; Back
      </a>

      <figure className={styles.post__hero}>
        <img className={styles.post__heroImage} src={heroImage} alt="Spring Boot security setup" />
        <figcaption className={styles.post__heroCaption}>
          JWT in Spring Boot is straightforward to start and easy to misuse in production. Correct
          filter order, token lifetime, and refresh strategy are the real differentiators.
        </figcaption>
      </figure>

      <header className={styles.post__header}>
        <p className={styles.post__eyebrow}>Spring Boot / Security</p>
        <h1 className={styles.post__title}>JWT Authentication in Spring Boot: End-to-End Guide</h1>
        <p className={styles.post__meta}>Estimated read: 14 minutes</p>
        <p className={styles.post__lead}>
          This guide shows how to build JWT authentication in Spring Boot with Spring Security 6:
          login endpoint, token generation, request filtering, refresh strategy, and production
          hardening practices.
        </p>
      </header>

      <nav className={styles.post__toc} aria-label="Table of contents">
        <p className={styles.post__tocTitle}>Table of Contents</p>
        <ul className={styles.post__tocList}>
          <li>
            <a href="#overview">JWT model in Spring Boot</a>
          </li>
          <li>
            <a href="#implementation">Implementation flow</a>
          </li>
          <li>
            <a href="#filter">JWT filter and SecurityContext</a>
          </li>
          <li>
            <a href="#refresh">Refresh token strategy</a>
          </li>
          <li>
            <a href="#hardening">Hardening checklist</a>
          </li>
        </ul>
      </nav>

      <section id="overview" className={styles.post__section}>
        <h2>JWT model in Spring Boot</h2>
        <p>
          In a stateless setup, your API does not keep server sessions for authenticated users.
          Instead, each protected request includes a signed token in the
          <code> Authorization: Bearer ...</code> header. The server verifies signature and claims,
          then recreates authentication for that request.
        </p>
        <p>
          JWT contains claims such as subject (username), issued-at, and expiration. It must be
          signed with a strong secret or private key.
        </p>
        <pre className={styles.post__code}>
          <code>{`// Typical JWT claims
{
  "sub": "alex",
  "roles": ["ROLE_USER"],
  "iat": 1738400000,
  "exp": 1738400900
}`}</code>
        </pre>
      </section>

      <figure className={styles.post__figure}>
        <img
          className={styles.post__figureImage}
          src={jwtAuthFlowDiagram}
          alt="JWT authentication flow in Spring Boot"
        />
        <figcaption className={styles.post__figureCaption}>
          Login returns a token, and every protected request is validated by a JWT filter.
        </figcaption>
      </figure>

      <section id="implementation" className={styles.post__section}>
        <h2>Implementation flow</h2>
        <h3>1. Add dependencies</h3>
        <pre className={styles.post__code}>
          <code>{`implementation "org.springframework.boot:spring-boot-starter-security"
implementation "org.springframework.boot:spring-boot-starter-web"
implementation "io.jsonwebtoken:jjwt-api:0.12.6"
runtimeOnly "io.jsonwebtoken:jjwt-impl:0.12.6"
runtimeOnly "io.jsonwebtoken:jjwt-jackson:0.12.6"`}</code>
        </pre>

        <h3>2. Configure security filter chain</h3>
        <pre className={styles.post__code}>
          <code>{`@Bean
SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
      .csrf(csrf -> csrf.disable())
      .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
      .authorizeHttpRequests(auth -> auth
          .requestMatchers("/api/auth/**").permitAll()
          .anyRequest().authenticated()
      )
      .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

    return http.build();
}`}</code>
        </pre>

        <h3>3. Login endpoint issues token</h3>
        <pre className={styles.post__code}>
          <code>{`@PostMapping("/api/auth/login")
public AuthResponse login(@RequestBody LoginRequest request) {
    Authentication auth = authenticationManager.authenticate(
      new UsernamePasswordAuthenticationToken(request.username(), request.password())
    );

    UserDetails user = (UserDetails) auth.getPrincipal();
    String accessToken = jwtService.generateAccessToken(user);
    String refreshToken = jwtService.generateRefreshToken(user);

    return new AuthResponse(accessToken, refreshToken);
}`}</code>
        </pre>
      </section>

      <section id="filter" className={styles.post__section}>
        <h2>JWT filter and SecurityContext</h2>
        <p>
          The filter extracts token from header, validates it, loads user details, and sets
          authentication into the security context before controller execution.
        </p>
        <pre className={styles.post__code}>
          <code>{`@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain chain) throws IOException, ServletException {
        String header = request.getHeader("Authorization");
        if (header == null || !header.startsWith("Bearer ")) {
            chain.doFilter(request, response);
            return;
        }

        String token = header.substring(7);
        String username = jwtService.extractUsername(token);

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            if (jwtService.isTokenValid(token, userDetails)) {
                UsernamePasswordAuthenticationToken auth =
                    new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }

        chain.doFilter(request, response);
    }
}`}</code>
        </pre>
      </section>

      <figure className={styles.post__figure}>
        <img
          className={styles.post__figureImage}
          src={jwtTokenLifecycleDiagram}
          alt="Access and refresh token lifecycle"
        />
        <figcaption className={styles.post__figureCaption}>
          Keep access tokens short-lived and rotate refresh tokens to limit blast radius.
        </figcaption>
      </figure>

      <section id="refresh" className={styles.post__section}>
        <h2>Refresh token strategy</h2>
        <p>
          A secure production setup usually has short-lived access tokens plus longer-lived refresh
          tokens. Refresh token can be stored in an HttpOnly cookie or secure storage depending on
          client type.
        </p>
        <pre className={styles.post__code}>
          <code>{`@PostMapping("/api/auth/refresh")
public AuthResponse refresh(@RequestBody RefreshRequest request) {
    String refreshToken = request.refreshToken();
    String username = jwtService.extractUsername(refreshToken);
    UserDetails user = userDetailsService.loadUserByUsername(username);

    if (!jwtService.isRefreshTokenValid(refreshToken, user)) {
        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid refresh token");
    }

    String newAccessToken = jwtService.generateAccessToken(user);
    String newRefreshToken = jwtService.rotateRefreshToken(user);
    return new AuthResponse(newAccessToken, newRefreshToken);
}`}</code>
        </pre>

        <div className={styles.post__tableWrap}>
          <table className={styles.post__table}>
            <thead>
              <tr>
                <th>Token type</th>
                <th>Typical TTL</th>
                <th>Main purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Access token</td>
                <td>5-15 minutes</td>
                <td>Authorize API requests</td>
              </tr>
              <tr>
                <td>Refresh token</td>
                <td>1-14 days</td>
                <td>Obtain new access tokens</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="hardening" className={styles.post__section}>
        <h2>Hardening checklist</h2>
        <ul>
          <li>Use strong secret keys and rotate them regularly</li>
          <li>Use HTTPS only, never transmit tokens over plain HTTP</li>
          <li>Keep access tokens short-lived and validate expiration on every request</li>
          <li>Implement refresh token rotation and token revocation on logout</li>
          <li>Add rate-limiting on login and refresh endpoints</li>
          <li>Return generic authentication errors to reduce information leakage</li>
        </ul>

        <div className={styles.post__note}>
          JWT is not automatically secure by itself. Most vulnerabilities come from storage choice,
          long token lifetime, and missing revocation controls.
        </div>

        <p>
          If you want predictable security behavior in Spring Boot, focus on explicit filter-chain
          design, strict token validation, and continuous monitoring of auth endpoints.
        </p>
      </section>
    </article>
  );
};

export default JwtSpringBootPage;
