import Logo from "../assets/logo.svg?react";
const Login = () => {
  return (
    <main className="zoom-in-out p-4 sm:p-2 min-h-screen h-full sm:h-screen w-screen bg-black flex flex-col justify-center items-center">

      <header className="flex flex-col items-center justify-center gap-4">
        <Logo />
        <h1 className="m-0 text-center font-bold">Link Your TV Using the Logosum App</h1>
      </header>
      <section className="flex flex-col-reverse md:flex-row sm:min-w-163 gap-4 mt-4 justify-flex-start sm:justify-between sm:items-center">
        <div>
          <ol type="1" className="m-0 login-list text-white" >
            <li>Open the logosum App on your phone</li>
            <li>Go to Profile → Settings</li>
            <li>Tap “Link TV Device</li>
            <li>
              <ul className="m-0 login-inner-list pl-2">
                <li className="relative text-center  pl-4"> Scan the QR Code displayed on your TV <br/> OR </li>
                <li className="relative text-center pl-4">
                  Enter the 14-digit login code shown below <br/>
                  <p className="py-2 text-[1.55rem] text-blue-100">QER-87T-OOI-87Q-PO</p>
                </li>
              </ul>
            </li>
            <li>Confirm on your phone to log in instantly</li>
          </ol>
        </div>
        <div className="flex flex-col items-center sm:items-flex-start">
          <img src="./assets/qr-code.webp" className="aspect-[1/1]" alt="QR Code" width="267" />
          <p className="text-center m-0 mt-4">Scan to sign in</p>
        </div>
      </section>

    </main>
  )
}

export default Login