const News = ({judul, isi, penutup}) => {
    return  (
        <>
        <div>
            <h3>Website Berita</h3>
                <ul>
                    <li>Judul : {judul}</li>
                    <li>Isi : {isi}</li>
                    <li>Penutup : {penutup}</li>
                </ul>            
        </div>
        </>
    )
}

export default News;