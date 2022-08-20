import React, { memo } from 'react';
import Navigation from 'src/components/Navigation';
import HueControl from 'src/components/HueControl';
import HeaderScrollbar from 'src/components/HeaderScrollbar';
import { EXPANDED_HEIGHT } from 'src/hooks/useHeaderHeight';
import { CATEGORIES } from 'src/consts/categories';

const styles = { height: `${EXPANDED_HEIGHT}px` };

const NAVIGATION_LINKS = CATEGORIES.map(({ id, title }) => ({
  to: `/${id}`,
  title,
}));

const Header = memo(() => (
  <header
    className="header"
    style={styles}
  >
    <a
      className="header_logo-link"
      href="/"
      title="ant478 Code Samples"
    >
      <ant478-logo wc-gear-spin-duration="60s" class="header_logo" />
    </a>
    <h1 className="header_title">Code Samples</h1>
    <HeaderScrollbar>
      <div className="header_navigation">
        <Navigation links={NAVIGATION_LINKS} />
      </div>
    </HeaderScrollbar>
    <HueControl className="header_hue-control-mix" />
  </header>
));

export default Header;
