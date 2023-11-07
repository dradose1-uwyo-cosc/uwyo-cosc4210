import React, { useState } from "react";
import SearchForm from "./SearchForm";
import GitHubUser from "./GitHubUser";
import UserRepositories from "./UserRepositories";
import RepositoryReadme from "./RepositoryReadme";


export default function App()
{
    const [login, setLogin] = useState("moonhighway");
    const [repo, setRepo] = useState("learning-react");
    const handleSearch = login =>
    {
        if (login) return setLogin(login);
        setLogin("");
        setRepo("");
    };
    if (!login)
        return (
            <SearchForm value={ login } onSearch={ handleSearch } />
        );
    return (
        <>
            <SearchForm value={ login } onSearch={ handleSearch } />
            <GitHubUser login={ login } />
            <UserRepositories

                login={ login }
                repo={ repo }
                onSelect={ setRepo }
            />
            <RepositoryReadme login={ login } repo={ repo } />
        </>
    );
}