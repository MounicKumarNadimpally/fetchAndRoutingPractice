import BlogList from '../BlogList/index'
import './index.css'

const Home = () => (
  <div className="main-container">
    <div className="profile-container">
      <div className="img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
        />
      </div>
      <h1 className="heading">Wade Warren</h1>
      <p className="desc">Software Developer at UK</p>
    </div>
    <BlogList />
  </div>
)

export default Home
