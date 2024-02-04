import Image from 'next/image'

const Custome404 = () => {
  return (
    <div className="text-center flex justify-center items-center h-screen">
      <div className="text-3xl font-bold underline">
        <Image src="/404.png" alt="not found" width={300} height={300} />
        Halaman tidak ditemukan
      </div>
    </div>
  )
}

export default Custome404
