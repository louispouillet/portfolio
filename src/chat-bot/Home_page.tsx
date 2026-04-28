import Typography from "@mui/material/Typography";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

   const goToAboutWithScroll = () => {
    const startY = window.scrollY;
    const targetY = Math.max(startY + window.innerHeight * 0.9, window.innerHeight);
    const maxScrollableY = document.documentElement.scrollHeight - window.innerHeight;
    const finalY = Math.min(targetY, maxScrollableY);
    const distance = finalY - startY;

    if (distance <= 0) {
      navigate('/chat-with-me');
      return;
    }

    const duration = 450;
    const startTime = performance.now();

    const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      window.scrollTo({ top: startY + distance * easedProgress });

      if (progress < 1) {
        requestAnimationFrame(animate);
        return;
      }

      navigate('/chat-with-me');
    };

    requestAnimationFrame(animate);
  };

  return (
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5vh' }}>
        <Typography sx={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif'}}>Hey, I'm Louis</Typography>
                <Typography sx={{ fontSize: '4rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif'}}>An Epitech's Student</Typography>
        <button style={{ padding: '0.8vh 0.8vw', fontSize: '1.5rem', borderRadius: '8px', backgroundColor: 'grey', color: 'white', border: 'none', cursor: 'pointer' }} onClick={goToAboutWithScroll}>Talk to me</button>
  
      </div>
  )

}