import { IonItem, IonLabel, IonNote } from "@ionic/react";

interface ContainerProps {
    text: string
  }
  
  const EmptyStateComponent: React.FC<ContainerProps> = ({ text }) => {
    return (
    <IonItem>
        <IonLabel>{text}</IonLabel>
    </IonItem>
    );
  };
  
  export default EmptyStateComponent;