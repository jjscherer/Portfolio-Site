import { useEffect, useState } from 'react';
import './App.css';

interface Profile {
    name: string;
    bio: string;
}

function App() {

    const [profile, setProfile] = useState<Profile | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function populateProfileData() {
            try {
                const response = await fetch('/api/profile');
                if (response.ok) {
                    const data: Profile = await response.json();
                    setProfile(data);
                } else {
                    setError(`Request failed (${response.status})`);
                }
            } catch (err) {
                console.error(err);

                if (err instanceof Error) {
                    setError(`Couldn't reach the server: ${err.message}`);
                } else {
                    setError("Couldn't reach the server. Please try again later.");
                }
            }
        }

        populateProfileData();
    }, []);

    const contents = error !== null 
        ? <p><em>{error}</em></p>
        : profile === null
        ? <p><em>Loading...</em></p>
        : <div>
            <h1>{profile.name}</h1>
            <p>{profile.bio}</p>
        </div>;

    return (
        <div>
            { contents }
        </div>
    );
}

export default App;