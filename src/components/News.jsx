const News = ({judul, isi, penutup, tanggal, gambar}) => {
    return  (
        <>
        <div>
            <h3>Website Berita</h3>
                <ul>
                    <li>Judul : {judul}</li>
                    <li>Isi : {isi}</li>
                    <li>Penutup : {penutup}</li>
                    <li>Tanggal : {tanggal}</li>
                </ul>
                <img src={gambar} alt="poster_stop_judol" width={100} height={100} />
        </div>
        </>
    )
}

export default News;