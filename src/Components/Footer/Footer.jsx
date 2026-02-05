import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center w-full bg-[#1b0d14] text-white py-15'>
        <div className='flex flex-col justify-start items-start w-full max-w-[1200px] gap-10 font-jakarta px-4
            sm:flex-row'>
            <div>
                <span className='material-symbols-outlined text-primary'>fluid</span>
                <h3 className='font-black'>Micaela Lentini</h3>
                <p>Redefiniendo el cuidado de las manos a través del arte y la excelencia profesional en Tres De Febrero.</p>
            </div>
            <div>
                <h3 className='font-black'>Horarios</h3>
                <p>Lunes a viernes: 09:00 a 20:00</p>
                <p>Sabado y domingo: 10:00 a 15:00</p>
            </div>
            <div>
                <h3 className='font-black'>Ubicacion</h3>
                <span className='material-symbols-outlined text-primary'>location_on</span>
                <p>Rio Pilcomayo 2332, Pablo Podesta. Tres De Febrero</p>
                <div className='rounded-lg overflow-hidden mt-5'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.097205797958!2d-58.614886523631206!3d-34.57640687296406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb96e328f3569%3A0x2a1ad0c35f6b63cb!2sRio%20Pilcomayo%202332%2C%20B1687AQL%20Pablo%20Podesta%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1770266293093!5m2!1ses!2sar"></iframe>
                </div>
            </div>
            <div>
                <h3></h3>
                <p></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer