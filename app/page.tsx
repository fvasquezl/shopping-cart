import Link from "next/link"

const page = () => {
  return (
    <>
      Pagina principal
      <div>
        <Link href="/categorias"><button>Categorias</button></Link>
        <Link href="/productos"><button>Products</button></Link>
      </div>
    </>
  )
}

export default page

