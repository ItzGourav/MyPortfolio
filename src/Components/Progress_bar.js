import React from 'react';

const Progress_bar = ( props ) => {

    const { bgcolor, progress, height,tag } = props;
    const Parentdiv = {
        height: height,
        width: '80%',
        backgroundColor: '#F2ECFF',
        borderRadius: 40,
        marginLeft: 20
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right'
    }

    const progresstext = {
        padding: 10,
        color: 'white',
        fontWeight: 500
    }

    const Bartag = {
        marginTop: 30,
        marginLeft: 20
    }

    return (
        <>
        <h6 style={Bartag}>{tag}</h6>
        <div style={Parentdiv}>
            <div style={Childdiv}>
            <span style={progresstext}>{`${progress}%`}</span>
            </div>
        </div>
        </>
    )
}

export default Progress_bar;
