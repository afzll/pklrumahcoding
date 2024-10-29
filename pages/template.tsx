// pages/template.tsx
import { useRouter } from 'next/router';

const TemplatePage = () => {
  const router = useRouter();
  const { templateSrc } = router.query;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
      <h1>Your Selected Template</h1>
      {templateSrc ? (
        <img src={templateSrc as string} alt="Selected Template" style={{ maxWidth: '100%', height: 'auto' }} />
      ) : (
        <p>No template selected</p>
      )}
    </div>
  );
};

export default TemplatePage;
