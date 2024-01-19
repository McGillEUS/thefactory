import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { MemberCard } from './OfficeHoursComponents/membercard';
import './officeHours.css';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/lab/Autocomplete';
import TextField from '@mui/material/TextField';



export function OfficeHours() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSkill, setSelectedSkill] = useState(''); // New state for selected skill
    const [people, setPeople] = useState([]);
    const [filteredPeople, setFilteredPeople] = useState([]);
    const [allSkills, setAllSkills] = useState([]); // New state for all skills



    useEffect(() => {
        fetch('https://sheetdb.io/api/v1/0qc6agpfy094g')
            .then((response) => response.json())
            .then((data) => {
                

            const processedData = data.map(item => ({
                name: item.Name,
                skills: (item["Any unique hardware skills (that not everyone in ECSE would have)"] + ', ' + item["Any unique software skills (that not everyone in ECSE would have)"])
                    .split(',')
                    .map(skill => skill.trim().toLowerCase()),
                major: item["Major (eg: U2 Computer eng)"],
                imageSrc: `/assets/${item.ImageName}`
            }));
                console.log("Processed Data:", processedData);
                setPeople(processedData);
                setFilteredPeople(processedData);

                // New block to extract all unique skills
                const skillsSet = new Set();
                processedData.forEach(person => {
                    person.skills.forEach(skill => skillsSet.add(skill));
                });
                setAllSkills(Array.from(skillsSet));
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleSkillSelect = (event, value) => {
        setSelectedSkill(value); // Update the selected skill when an option is chosen
    };
    
    const handleSearch = (event) => {
        const value = event.target.value; // Remove .trim() here
        setSearchTerm(value);
    
        const trimmedValue = value.toLowerCase().trim(); // Trim the value when searching
    
        if (trimmedValue) {
            const filtered = people.filter(person =>
                person.skills.some(skill => skill.includes(trimmedValue))
            );
            setFilteredPeople(filtered);
        } else {
            setFilteredPeople(people);
        }

        setSelectedSkill(''); // Clear the selected skill when the search term changes
    };
    
    
    return (
        <div className='page'>
             <Box className='timetable'
                 component="img"
                 src={'src/assets/OfficeHoursTimetable.png'}
                 alt={'Office hours'}
            />


            <Autocomplete
                        freeSolo
                        options={allSkills}
                        className='search-bar'
                        value={selectedSkill} // Set the selected skill from state
                        onChange={handleSkillSelect} // Handle skill selection
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Specific thing I'd like help with:"
                                variant="outlined"
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                              

                            />
                        )}
                        onInputChange={(event, newInputValue) => {
                            setSearchTerm(newInputValue.toLowerCase().trim());
                            const filtered = people.filter(person =>
                                person.skills.some(skill => skill.includes(newInputValue.toLowerCase().trim()))
                            );
                            setFilteredPeople(filtered);
                        }}
                    />

                    {selectedSkill && ( // Display the message only if a skill is selected
                        <div className="selected-skill-message">
                                Showing all managers who know about <strong>{selectedSkill}</strong>
                        </div>
                    )}
        
            <div className='grid-container'>
                {filteredPeople.map((person, index) => (

                    <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            {/* Existing front side content */}
                            <MemberCard key={index} name={person.name} skills={person.skills} major={person.major} imageSrc={person.imageSrc} />
                        </div>
                        <div className="flip-card-back">
                            {/* Content for the back of the card */}
                            <div>
                                {/* You can put more detailed information here */}
                            </div>
                        </div>
                    </div>
                    </div>
                    
                ))}
            </div>
        </div>
    );
}
