const Contact = () => (
    <section id="contact" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 lg:mb-10">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <div className="p-3 md:p-4 bg-white rounded-xl shadow hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:shadow-xl active:scale-105 active:-translate-y-1 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-indigo-300 active:border-indigo-300 active:bg-indigo-50">
                <p className="text-sm md:text-base lg:text-lg flex items-center justify-center gap-2">
                    <span>📞</span>
                    <span>+91 9872162107</span>
                </p>
            </div>
            <div className="p-3 md:p-4 bg-white rounded-xl shadow hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:shadow-xl active:scale-105 active:-translate-y-1 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-indigo-300 active:border-indigo-300 active:bg-indigo-50">
                <p className="text-xs md:text-sm lg:text-base flex items-center justify-center gap-2 break-all">
                    <span>📧</span>
                    <span>abhishekmahajan0303@gmail.com</span>
                </p>
            </div>
            <div className="p-3 md:p-4 bg-white rounded-xl shadow hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:shadow-xl active:scale-105 active:-translate-y-1 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-indigo-300 active:border-indigo-300 active:bg-indigo-50">
                <p className="text-sm md:text-base lg:text-lg flex items-center justify-center gap-2">
                    <span>📍</span>
                    <span>Bilaspur, HP</span>
                </p>
            </div>
        </div>
    </section>
);

export default Contact;