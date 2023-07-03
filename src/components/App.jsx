import { Feedback } from './feedback/feedback';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        marginLeft: '50px',
      }}
    >
      <Feedback />
    </div>
  );
};
