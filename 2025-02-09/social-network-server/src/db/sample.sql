SELECT
    `User`.`id`,
    `User`.`name`,
    `User`.`username`,
    `User`.`password`,
    `User`.`created_at` AS `createdAt`,
    `User`.`updated_at` AS `updatedAt`,
    `posts`.`id` AS `posts.id`,
    `posts`.`user_id` AS `posts.userId`,
    `posts`.`title` AS `posts.title`,
    `posts`.`body` AS `posts.body`,
    `posts`.`image_url` AS `posts.imageUrl`,
    `posts`.`created_at` AS `posts.createdAt`,
    `posts`.`updated_at` AS `posts.updatedAt`,
    `posts->user`.`id` AS `posts.user.id`,
    `posts->user`.`name` AS `posts.user.name`,
    `posts->user`.`username` AS `posts.user.username`,
    `posts->user`.`password` AS `posts.user.password`,
    `posts->user`.`created_at` AS `posts.user.createdAt`,
    `posts->user`.`updated_at` AS `posts.user.updatedAt`,
    `posts->comments`.`id` AS `posts.comments.id`,
    `posts->comments`.`post_id` AS `posts.comments.postId`,
    `posts->comments`.`user_id` AS `posts.comments.userId`,
    `posts->comments`.`body` AS `posts.comments.body`,
    `posts->comments`.`created_at` AS `posts.comments.createdAt`,
    `posts->comments`.`updated_at` AS `posts.comments.updatedAt`,
    `posts->comments->user`.`id` AS `posts.comments.user.id`,
    `posts->comments->user`.`name` AS `posts.comments.user.name`,
    `posts->comments->user`.`username` AS `posts.comments.user.username`,
    `posts->comments->user`.`password` AS `posts.comments.user.password`,
    `posts->comments->user`.`created_at` AS `posts.comments.user.createdAt`,
    `posts->comments->user`.`updated_at` AS `posts.comments.user.updatedAt`
FROM
    `users` AS `User`
    LEFT OUTER JOIN `posts` AS `posts` ON `User`.`id` = `posts`.`user_id`
    LEFT OUTER JOIN `users` AS `posts->user` ON `posts`.`user_id` = `posts->user`.`id`
    LEFT OUTER JOIN `comments` AS `posts->comments` ON `posts`.`id` = `posts->comments`.`post_id`
    LEFT OUTER JOIN `users` AS `posts->comments->user` ON `posts->comments`.`user_id` = `posts->comments->user`.`id`
WHERE
    `User`.`id` = '1230ae30-dc4f-4752-bd84-092956f5c633';