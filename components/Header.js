import React from "react";
import { CommandBar } from '@fluentui/react';

const Header = ({ theme, setTheme }) => {
  return (
    <CommandBar
      style={{ borderBottom: '1px solid grey' }}
      items={[
        {
          key: 'home',
          text: 'Tender 2.0',
          href: '/',
        }
      ]}
      farItems={[
        {
          key: 'newTender',
          text: 'Create a Tender',
          iconProps: { iconName: 'Add' },
          href: '/tenders/new',
        },
        {
          key: 'theme',
          iconProps: { iconName: theme !== 'light' ? 'Sunny' : 'ClearNight' },
          onClick: () => { setTheme(theme === 'light' ? 'dark' : 'light'); }
        }
      ]}
    />
  );
};

export default Header;