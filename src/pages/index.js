import Link from 'next/link';

function Home() {
    return (
    <div>
        <h1>Home</h1>

        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>
        <br></br>
        <Link href="/api/tempo">
            <a>Time</a>
        </Link>
    </div>    
 )
}

export default Home