import '../officeHours.css';
import Box from '@mui/material/Box';

type MemberCardProps = {
    name: string;
    major: string;
    skills: string[];
    imageSrc: string;
};

export const MemberCard: React.FC<MemberCardProps> = ({ name, major, skills, imageSrc }) => {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={imageSrc} alt={`Picture of ${name}`} />
            </div>
            <div className='card-text'>
                <h3 className='name'>{name}</h3>
                <p className='major'>{major}</p>
                <p className='skills'></p>
                <ul>
                </ul>
            </div>
        </div>
    );
}
