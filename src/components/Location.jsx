const Location = () => {
    return (
        <section className='location'>
            <iframe 
              src="https://www.google.com/maps?q=Nivy+Tower,+Bratislava,+Slovakia&output=embed" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Nivy Tower Location"
            ></iframe>
        </section>
    )
}   

export default Location;    