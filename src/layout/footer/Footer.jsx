import styles from './Footer.module.css'
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className={styles.body}>
      <h1 className='mt-5'>
            You can contact me below here ⬇️ 
      </h1>
      <div className={styles.main}>
        <div>
            <h4>Contact Me</h4>
            <p className='mt-4'>☎️ 062-309-6905</p>
            <p>📧 chea14chainat@gmail.com</p>
        </div>

        
      <div className={styles.iconContainer}>
        <h4>Social</h4>
      <SocialIcon
        className={styles.icon}
        url="https://www.facebook.com/chayan.hmt?locale=th_TH"
        target="_blank"
      />
      {/* <SocialIcon
        className={styles.icon}
        url="https://twitter.com/your-twitter-profile"
        target="_blank"
      /> */}
      <SocialIcon
        className={styles.icon}
        url="https://www.instagram.com/thanin_pitakpoolsin/"
        target="_blank"
      />

    </div>
      </div>



    </div>
  )
}

export default Footer
