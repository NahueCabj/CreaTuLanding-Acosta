import LoaderComponent from './LoaderComonent';
import { useState, useEffect } from 'react';

const Contacto = () => {
  const [loader, setLoader] = useState(false)
  

  useEffect(() => {
    setLoader(true)
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);




 
  return (
    <>
    {loader
    ? <LoaderComponent/>
    :
    <div className="container mx-auto px-4 py-12">
      <h1 className="logo text-3xl font-bold text-[#2B1A0F] mb-6 text-center">
        Contáctanos
      </h1>

      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10">
        Si tenés alguna consulta sobre nuestros productos o servicios, no dudes
        en comunicarte con nosotros. Estaremos encantados de ayudarte.
      </p>

      {/* Card con info de contacto */}
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md mx-auto text-center mb-12">
        <h2 className="text-xl font-semibold text-[#7b4b2a] mb-4">
          Información de contacto
        </h2>
        <p className="text-gray-700 mb-2">📞 Teléfono: +598 99 123 456</p>
        <p className="text-gray-700">📧 Email: contacto@kikacoffe.com</p>
      </div>

      {/* Formulario */}
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-[#7b4b2a] mb-6 text-center">
          Envíanos un mensaje
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-left text-gray-700 font-medium mb-1">
              Nombre
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7b4b2a]"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7b4b2a]"
              placeholder="Tu email"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 font-medium mb-1">
              Mensaje
            </label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7b4b2a]"
              placeholder="Escribe tu mensaje..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#7b4b2a] text-white py-3 rounded-xl font-semibold hover:bg-[#623820] transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  }
  </>
  );
}

export default Contacto;