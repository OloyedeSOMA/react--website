
import './MissionSection.css';


const MissionSection = () => {
  return (
    <>
        <div id="mission-section">
        <h2 className="mission-title">Main Focus/Mission Statement</h2>
        <div className="mission-items">
            <div className="mission-item">
                <span className="mission-number">1</span>
                <p className="mission-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Sed efficitur, lectus et facilisis placerat.
                </p>
            </div>
            <div className="mission-item">
                <span className="mission-number">2</span>
                <p className="mission-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.
                </p>
            </div>
        </div>
        </div>

        
    
    </>
  );
};

export default MissionSection;
