<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */
// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'if0_34406564_wp997' );
/** Database username */
define( 'DB_USER', '34406564_1' );
/** Database password */
define( 'DB_PASSWORD', ')BkSp0-84D' );
/** Database hostname */
define( 'DB_HOST', 'sql110.byetcluster.com' );
/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );
/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ftpcex6o9fbrj97nwzphohr4oftto6k3j7znvgcf4wy5s4b6sfazbtatzqq5mb5a' );
define( 'SECURE_AUTH_KEY',  '66rqdqnzza6r7dott3gzptlbzv8jwgbd8apoasbuduhuvr61uihouaj0hgh1pmbv' );
define( 'LOGGED_IN_KEY',    'zsxotra7i3qoiqgdfddu2xwcqdzwt8q4xlh1ia9cz7p0qdsn0cemqkyfxqkbtzvj' );
define( 'NONCE_KEY',        'xni95vaz9bfxwzme4liv4q8uz6thh3lnnbtgjpb546oanauuvwd7pouf0gsyguck' );
define( 'AUTH_SALT',        'r1lorpxepbcw23x8dnotjbubntjy67ggv1kebldt9xzz8qegcizafmixlrolf6ja' );
define( 'SECURE_AUTH_SALT', 'fi8uskvxsl3p9lxgm7bth4sd2vap4ews9wcilgyv0fblbunaw9wp6ppl1dqun3hm' );
define( 'LOGGED_IN_SALT',   'dfpywkz7jtsvuctkxnjm16yume4g6qlvp4ber2si7ygcriclorjdeqry2s7pcb6a' );
define( 'NONCE_SALT',       'iimzpiq3xgdjjylvchowqmplsskrchpt2xpdid4dgdlodkrvqcswq6ggybjzhesu' );
/**#@-*/
/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpod_';
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
/* Add any custom values between this line and the "stop editing" line. */
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
