import React from 'react';

const UserAgentInfo = () => {
    const userAgent = navigator.userAgent;
    return (
        <div>
            <h2>Информация о браузере</h2>
            <p>{userAgent}</p>
        </div>
    );
};

export default UserAgentInfo;