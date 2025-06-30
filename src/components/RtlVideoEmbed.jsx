import React, { useEffect, useRef } from 'react';

const RtlVideoEmbed = ({ videoId, className }) => {
  const embedContainerRef = useRef(null);

  useEffect(() => {
    if (embedContainerRef.current && videoId) {
      embedContainerRef.current.innerHTML = '';
      const script = document.createElement('script');
      script.async = true;
      script.type = 'text/javascript';
      script.src = 'https://www.rtl.be/videos/player/vp_embed.js';
      script.setAttribute('videoid', videoId);
      
      const containerDiv = document.createElement('div');
      containerDiv.style.width = '100%';
      containerDiv.style.height = '100%';
      containerDiv.appendChild(script);
      
      embedContainerRef.current.appendChild(containerDiv);
    }

    return () => {
      if (embedContainerRef.current) {
        embedContainerRef.current.innerHTML = '';
      }
    };
  }, [videoId]);

  return <div ref={embedContainerRef} className={className} style={{ width: '100%', aspectRatio: '16/9' }}></div>;
};

export default RtlVideoEmbed;