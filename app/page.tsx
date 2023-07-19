import Link from "next/link"

const page = () => {
  return (
    <>
      Pagina principal
      <Link href="/categorias"><button>Categorias</button></Link>
      <Link href="/productos"><button>Products</button></Link>
    </>
  )
}

export default page

