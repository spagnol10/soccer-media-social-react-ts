import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css"
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg',
      name: 'Lionel Messi',
      role: 'Soccer Player'
    },
    content: [
      { type: 'paragraph', content: 'Hablas Manitos 👋' },
      { type: 'paragraph', content: 'Otro balón de oro para papá🚀' },
      { type: 'link', content: '@Messi10' },
      { type: 'img', content: 'https://uploads.maisgoias.com.br/2022/12/ba5389b6-messi-beija-a-taca-da-copa-do-mundo-1064x675.jpg'}
    ],
    publishedAt: new Date('2024-08-22 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR1bGGi3JK4IknHua3xDucgbe1ah0T2s2aQcm6AeXC5jEgRKKBz',
      name: 'Cristiano Ronaldo',
      role: 'Soccer Player'
    },
    content: [
      { type: 'paragraph', content: 'Aoba Guri 👋' },
      { type: 'paragraph', content: 'Siiiiiuuu 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'img', content: 'https://s2-ge.glbimg.com/r1HPaQYSUg6W66yjRdLR4-cWr7o=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/s/U/M3KThWSvmIobXeoIKrKw/2022-10-27t204304z-2106604607-up1eiar1ljqsg-rtrmadp-3-soccer-europa-mun-she-report.jpg'}
    ],
    publishedAt: new Date('2024-08-22 21:00:00'),
  },
];

export default function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

