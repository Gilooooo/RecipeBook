export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#f1efe0] px-4">
            <div className="text-[#2d1b69] bg-white p-6 sm:p-8 sm:py-12 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded focus:border-0 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded focus:border-0 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#ffd1a0] py-2 rounded hover:bg-[#ffa94d] transition"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <a href="/Dashboard" className="text-blue-500 hover:underline text-sm">
                        Forgot your password?
                    </a>
                </div>
            </div>
        </div>
    );
}