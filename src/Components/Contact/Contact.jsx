import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Success from "./Success";
import Error from "./Error";
import { publicKEY, serviceID, templateID } from "../../utils/formSettings";

const Contact = () => {
    const [isSent, setIsSent] = useState('pending')

    const closeIsSent = () => setTimeout(() => {
        setIsSent('pending')
    }, 4000);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(`${serviceID}`, `${templateID}`, e.target, `${publicKEY}`)
            .then(() => setIsSent('sent'))
            .catch(e => setIsSent('error'))
            .finally(() => {
                e.target.reset()
                closeIsSent()
            })
    }

    return (
        <section id="contact" className="my-15 scroll-mt-20">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
                <div className="bg-[#1b0d14] p-10 text-white flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl font-black font-jakarta mb-4">Hablemos</h2>
                        <p className="text-slate-400 max-w-xs">¿Tenes una idea para tus uñas? Contame y lo hacemos realidad.</p>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                                <span className="material-symbols-outlined">stacked_email</span>
                                <i className="ri-mail-line text-ac-gold text-xl"></i>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email</p>
                                <p className="text-sm">hola@micalentini.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                                <span className="material-symbols-outlined">location_on</span>
                                <i className="ri-map-pin-line text-ac-gold text-xl"></i>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Ubicación</p>
                                <p className="text-sm">Buenos Aires, Argentina</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-ac-gold hover:text-black transition-all cursor-pointer">
                            IG
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-ac-gold hover:text-black transition-all cursor-pointer">
                            WA
                        </div>
                    </div>
                </div>
                <form className="p-10 space-y-6 bg-white" onSubmit={sendEmail}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase text-slate-500 ml-1">Nombre</label>
                            <input
                                required
                                name="name"
                                type="text"
                                placeholder="Ej. Micaela"
                                className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ac-gold/50 transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase text-slate-500 ml-1">WhatsApp</label>
                            <input
                                required
                                name="cel"
                                type="number"
                                placeholder="+54 9 11..."
                                className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ac-gold/50 transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase text-slate-500 ml-1">E-Mail</label>
                            <input
                                required
                                name="email"
                                type="email"
                                placeholder="tucorreo@gmail.com"
                                className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ac-gold/50 transition-all"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-slate-500 ml-1">Tu mensaje</label>
                        <textarea
                            required
                            name="message"
                            rows="4"
                            placeholder="¿Cómo te gustaría tus uñas?"
                            className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ac-gold/50 transition-all resize-none"
                        ></textarea>
                    </div>
                    <button className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-xl shadow-slate-200 hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 cursor-pointer" type="submit">Enviar Mensaje</button>
                </form>
            </div>
            {isSent === 'sent' && <Success />}
            {isSent === 'error' && <Error />}
        </section>
    );
};

export default Contact;
