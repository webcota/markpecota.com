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
define('DB_NAME', 'markdotcom');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

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
define('AUTH_KEY',         'XlCRv{xP:,[P!V[=m)Jtw`, 0$ IN.(VC=Z_pRW`q@ckT+=bFT1wo;^%Nw;-Y(-`');
define('SECURE_AUTH_KEY',  '-]`(kkoRsh@`Raa|6CeJM/01:^;{aAf}n(&g$qpEA-5*hax60ues+Ie,B|0kav3L');
define('LOGGED_IN_KEY',    '|j|Dg1M: H huBvz/:2{)Sd6|BvJ4|9OB{jl)Ka%=.HF(SB{7T$8RdQm+@3o=@t@');
define('NONCE_KEY',        '+ZLVC;&L7&nY/E#L&hDoufND+r7|Jw(WV5K/3Q0/T89WTE~CRd37w:$xy i%AlR3');
define('AUTH_SALT',        'ph@g+gW#Gx$HegkrJjREs?2ZOm8n:k6}pwZ~w##..|5J:p/+9rXH`vc-1& S#vjy');
define('SECURE_AUTH_SALT', '|;`A Ahd0!`?+th,8Ilks:sg%PA6Rv<k|O8hLN|VRq6)bwM#T!h]I>9PNQtn>+J$');
define('LOGGED_IN_SALT',   'P8`F(3zLtB^}gRQhsR$m%&nEyX-(#h#>osF=8J^:Ba8:2#+0-{LRSt5Lrr51YtTW');
define('NONCE_SALT',       'c38Uv9#*u/y`s194QTN1q 5,+Q-EePn0!a`My?g5>erl+NB| Ul,{b}MIGB+6{~t');

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
require_once(ABSPATH . 'wp-settings.php');
