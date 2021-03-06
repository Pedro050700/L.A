import React, { Component } from "react";
import Dropzone from 'react-dropzone';

import {DropContainer, UploadMessage} from './styles';

export default class Upload extends Component {
    render() {
        return(
            <Dropzone accept="image/*" onDropAccepted={() =>{}}>
            { ({getRootProps,getInputPros, isDragActive, isDragReject}) => (
            <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
            >
            <input {...getInputPros()}/>
            )}
            
            </Dropzone>
    
        );
    }
}