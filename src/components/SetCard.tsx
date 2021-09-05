interface ContainerProps {
  name: string
  set: any
}

const SetCard: React.FC<ContainerProps> = ({ name, set }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default SetCard;
