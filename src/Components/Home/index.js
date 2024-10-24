import Header from '../Header';
import logo from "../../assets/images/Nyros-Technologies-logo-profile.jpg"
import './index.css'


const  Home = () => (
     <div>
      <Header/>
       <div className='Home-container'>
       <div className='container1'>
       <h1>Nyros Projects</h1>
       <p>Nyros Technologies develops responsive corporate websites to enhance online presence. They create custom e-commerce platforms with integrated payment gateways for seamless shopping. The company specializes in mobile app development, offering cross-platform solutions using React Native and Flutter. They provide cloud solutions, assisting businesses in migrating to cloud platforms and developing cloud-native applications. Additionally, they focus on data analytics and business intelligence, delivering tools for data visualization and predictive analytics.</p>
       </div>
       <div className='container2'>
          <img src = {logo} alt = "logo"/>
       </div>
       </div>
     </div>
)


export default Home;