import error from "../../src/image/error404.jpg"


const Page404 = () => {
    return (
        <main>
            <img src={error} alt="" />
            <p>Esta pagina no existe</p>
        </main>
    )
}

export default Page404;