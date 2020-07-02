import React from 'react';
import { WebView } from 'react-native-webview';

interface MapProps {
    latitude: string;
    longitude: string;
}

const MapFrame: React.FC<MapProps> = ({ latitude, longitude }) => {

    return (
        <WebView 
            startInLoadingState={true} 
            style={{width: "100%"}} 
            originWhitelist={['*']} 
            source={{
                html: `
                    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                    <html xmlns="http://www.w3.org/1999/xhtml">
                        <head>
                            <title>Test Layout</title>
                            <style type="text/css">
                                body, html
                                {
                                    margin: 0; padding: 0; height: 100%; overflow: hidden;
                                }
                    
                                #content
                                {
                                    position:absolute; left: 0; right: 0; bottom: 0; top: 0px; 
                                }
                            </style>
                        </head>
                        <body>
                            <div id="content">
                                <iframe frameborder='0' scrolling='no' marginheight='0' marginwidth='0' title='map' height='100%' width='100%' src='https://maps.google.com/maps?width=400&height=300&hl=en&q=${latitude}%2C%20${longitude}&output=embed' />
                            </div>
                        </body>
                    </html>
                `
            }}
        />
    )
}

export default MapFrame;