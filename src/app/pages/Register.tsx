export default function Register() {
    return (
        <div className="bg-gray-200 min-h-screen px-10 flex items-center">
            <div className="container max-w-lg mx-auto h-fit p-5 bg-white rounded-xl shadow-md shadow-gray-300">
                <div className="mb-3">
                    <h3 className="block text-5xl font-bold text-blue-600 mb-1">Criar conta</h3>
                    <h3>Ja possui uma conta? <a href="/#">Clique aqui</a></h3>
                </div>
                <div>
                    <label className="block mb-1 font-semibold text-sm">Nome completo</label>
                    <input className="p-2 outline-none focus:ring focus:ring-blue-600 transition-all container rounded bg-gray-100 mb-2" type="text" placeholder="Nome completo" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold text-sm">Email</label>
                    <input className="p-2 outline-none focus:ring focus:ring-blue-600 transition-all container rounded bg-gray-100 mb-2" type="email" placeholder="Email" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold text-sm">Senha</label>
                    <input className="p-2 outline-none focus:ring focus:ring-blue-600 transition-all container rounded bg-gray-100 mb-2" type="password" placeholder="Senha" />
                </div>
                <button className="container focus:ring focus:ring-blue-300 hover:bg-blue-500 transition-all outline-none mt-6 bg-blue-400 py-2 font-semibold text-white uppercase rounded">
                    Criar
                </button>
            </div>
        </div>
    )
}

