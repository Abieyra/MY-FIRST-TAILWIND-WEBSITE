import styles from "./header.module.css"
import image from "next/image"


const Header = () => {
    return(
        <div className='h-screen w-{100%}
        bg-gradient-to-r from-purple-500 to-pink-500'>
            <h1 className={styles.heading}>Welcome to my Website</h1>

        </div>
    )
}

export default Header ;