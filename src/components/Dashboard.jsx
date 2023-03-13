import Navbar from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const Dashboard = () => {
    return ( 
    <div className="dashboard">
        <Navbar/>
        <div className="main">
            <section>
                <div id="about">
                    <h1>#1 Fitness App.Work Out Anytime. Anywhere.</h1>
                    <p>Unlimited access to the world’s best workouts from celebrity trainers</p>
                </div>
            </section>
            <section>
                <div>
                    <h2>Get FitOn. Get Results.</h2>
                    <p>Join 13+ million members on the top digital health & wellness platform and stay toned, lose weight, get strong, reduce stress, and reach your goals.</p>
                </div>
                <div className="card-info">
                    <div data-aos="zoom-in" className="card">
                        <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7.png" alt="" />
                        <h3>Best Workouts</h3>
                        <p>Train your mind and body with personalized fitness programs.</p>
                    </div>
                    <div data-aos="zoom-in"  className="card">
                        <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/FitOn-med-002.jpg" alt="" />
                        <h3>Best Meditation</h3>
                        <p>Reduce stress and be more mindful with soothing video meditations.</p>
                    </div>
                    <div data-aos="zoom-in"  className="card">
                        <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7-1.png" alt="" />
                        <h3>Best Trainers</h3>
                        <p>Work out with celebrities and world-class trainers.</p>
                    </div>
                    <div data-aos="zoom-in"  className="card">
                        <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7-2.png" alt="" />
                        <h3>Always On</h3>
                        <p>Anytime, anywhere. No equipment required.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>);
}
export default Dashboard;