import { useEffect, useState } from 'react';
import './App.css';

interface Profile {
    name: string;
    bio: number;
}

function App() {

    const [profile, setProfile] = useState<Profile>();

    useEffect(() => {
        populateProfileData();
    });

    const contents = profile === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <div>
            <h1>{profile.name}</h1>
            <h3>{profile.bio}</h3>
        </div>;

    return (
        <div>
            { contents }
        </div>
    );

    async function populateProfileData(){

        const response = await fetch('Profile');
        if (response.ok){
            const data = await response.json();
            setProfile(data);
        }
    }
}

export default App;