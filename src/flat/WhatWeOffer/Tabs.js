/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { animated, useTransition } from 'react-spring';

function Tabs({ items, currentTab, onChange }) {
  const trans = useTransition(items[currentTab], {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  return (
    <>
      <div>
        {items.map((item, tabIndex) => (
          <Tab
            key={tabIndex}
            onClick={onChange}
          >
            {item.label}
          </Tab>
        ))}

      </div>
      <div style={{ position: 'relative' }}>
        {trans((style, item, t, i) => (
          <animated.div
            key={item.key}
            style={{
              ...style,
              width: '100px',
              height: '200px',
              position: 'absolute',
            }}
          >
            {item.component}
          </animated.div>
        ))}
      </div>
    </>
  );
}

function Tab({
  key, onClick, selected, children,
}) {
  return (
    <div
      key={key}
      onClick={onClick}
      selected={selected}
      role="tab"
      style={{ display: 'inline-block', cursor: 'pointer', padding: 20 }}
    >
      {children}
    </div>
  );
}
export default Tabs;
