import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay,
        faAngleLeft,
        faAngleRight,
        faPause,
}
        from "@fortawesome/free-solid-svg-icons";


const Player = ({audioRef, currentSong, isPlaying, setIsPlaying, setSongInfo, songInfo}) => {

    const PlaySongHandler =()=>{
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }

    };



    const getTime = (time)=>{
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }

    const dragHandler = (e)=>{
        audioRef.current.currentTime = e.target.value;
        // console.log(audioRef);
        setSongInfo({...setSongInfo, currentTime: e.target.value})

    }


    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0}
                       max={songInfo.duration}
                       value={songInfo.currentTime}
                       onChange={dragHandler}
                       type="range"/>
                <p>{getTime(songInfo.duration)}</p>
            </div>

            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={PlaySongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>

        </div>

    )
}

export default Player;


