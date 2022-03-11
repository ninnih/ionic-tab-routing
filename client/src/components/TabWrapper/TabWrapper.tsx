import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from "@ionic/react"

export interface MenuItem {
  url: string
  title: string
  icon: string
}

type ComponentProps = {
  items: MenuItem[]
  isAuthenticated: boolean | null
  tabBar: boolean
} 

const TabWrapper: React.FC<ComponentProps> = ({ isAuthenticated, tabBar, items, children }) => {

  const tabs = tabBar ? <IonTabBar color="forestgreen" slot="bottom">
    {items.map((item, index) => 
      <IonTabButton
        key={index}
        tab={index.toString()}
        href={item.url}>
        <IonIcon icon={item.icon} />
        <IonLabel>{item.title}</IonLabel>
      </IonTabButton> )}
    </IonTabBar>
     :
    <IonTabBar></IonTabBar>

  return <IonTabs>
    { children }
    { isAuthenticated ?
      tabs
       : 
      <IonTabBar  color="forestgreen" slot="bottom">
        <IonTabButton tab="login" href="/login">Login</IonTabButton>
        <IonTabButton tab="register" href="/register">Register</IonTabButton>  
      </IonTabBar> 
    }
  </IonTabs>
}

export default TabWrapper