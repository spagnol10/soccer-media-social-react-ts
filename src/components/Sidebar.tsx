import { PencilLine } from "phosphor-react"
import styles from "../components/Sidebar.module.css"
import { Avatar } from "./Avatar"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://s2-oglobo.glbimg.com/DeCgxjSijq8Uq4SsIOeMDEeHkOM=/0x0:3878x2325/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/R/v/fBQkkGSjSW2bDKDBisoA/100227402-paris-saint-germains-brazilian-forward-neymar-celebrates-scoring-his-teams-fifth-goal-du.jpg"
      />

      <div className={styles.profile}>
        <Avatar src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgxnyQxTw8ElZpkvvxVV0v_bZ4GhYdUmjTSFUpAIQXd5LIF9YxnujNL0n5F1G9EyMRhM4Rju_EazfWm7IpD_Qwfshvo5P2S2Jm8phxNA" />

        <strong>Neymar JR</strong>
        <span>Jogador De Futebol</span>
      </div>

      <footer>
        <a href="">
          <PencilLine size={20} />
          Edit Your Profile
        </a>
      </footer>
    </aside>
  )
}