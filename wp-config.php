<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */

/** MySQL database username */

/** MySQL database password */

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
define('FS_METHOD', 'direct');
define('AUTH_KEY',         'e?9sbY|H0~=5AG`1-|r%T:PMGkwo{7jq  <m/*J^R[p;wzr:u(Tz]1?nrjkxn92!');
define('SECURE_AUTH_KEY',  ')#$1&[|6]2/fjK_zjd06yMu`omP]%M|*mVb0hFm}#7{o<Rk8+zZSvXL8c<S+^4y6');
define('LOGGED_IN_KEY',    '.E[g>w2|(;M7-]JcpGyMVKNKI_I$Z=FLMEel0<-KegAZ&${8=B`]W%uDQ33qYz|<');
define('NONCE_KEY',        'rZTS){|w~DkJ25u!Q(>~r;7ehDj]4E</8lDj(*|Y17%r[|dk>p9|}s|W6_@rz^+|');
define('AUTH_SALT',        'Ldt@G/Cg.TZ`ES;+?T)-4WLB#ByX=AM0,WvPsSL)V1&!R-4.nNG7v%@Ri-B*kp#d');
define('SECURE_AUTH_SALT', 'j0nk:y+!r8g>%]=KbVN=%N4hvV($9aA9!If:PfR-*voQD!g_|Kb-4_4Bbe<&Q0Bl');
define('LOGGED_IN_SALT',   'WfegpJr{ ugxb7Q|d0c?WUVhhuWynkGYLI:+g^wT,SrfjinF<.iMNC={W+(&)H=X');
define('NONCE_SALT',       '~[%vA#?L*|.:2|f^8ha.:<cxEXGT@x|+E3L-:~/aL~+oXk5g~B5q +`abt/Y|+}b');
define('DB_NAME', 'wordpress');
define('DB_USER', 'wordpress');
define('DB_PASSWORD', 'f9cnn17vAS');
require_once(ABSPATH . 'wp-settings.php');
