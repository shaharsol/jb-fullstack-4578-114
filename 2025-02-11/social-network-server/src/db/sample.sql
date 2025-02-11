SELECT
    `User`.`id`,
    `User`.`name`,
    `User`.`username`,
    `User`.`password`,
    `User`.`created_at` AS `createdAt`,
    `User`.`updated_at` AS `updatedAt`,
    `following`.`id` AS `following.id`,
    `following`.`name` AS `following.name`,
    `following`.`username` AS `following.username`,
    `following`.`password` AS `following.password`,
    `following`.`created_at` AS `following.createdAt`,
    `following`.`updated_at` AS `following.updatedAt`,
    `following->Follow`.`follower_id` AS `following.Follow.followerId`,
    `following->Follow`.`followee_id` AS `following.Follow.followeeId`,
    `following->Follow`.`created_at` AS `following.Follow.createdAt`,
    `following->Follow`.`updated_at` AS `following.Follow.updatedAt`,
    `following->posts`.`id` AS `following.posts.id`,
    `following->posts`.`user_id` AS `following.posts.userId`,
    `following->posts`.`title` AS `following.posts.title`,
    `following->posts`.`body` AS `following.posts.body`,
    `following->posts`.`image_url` AS `following.posts.imageUrl`,
    `following->posts`.`created_at` AS `following.posts.createdAt`,
    `following->posts`.`updated_at` AS `following.posts.updatedAt`,
    `following->posts->user`.`id` AS `following.posts.user.id`,
    `following->posts->user`.`name` AS `following.posts.user.name`,
    `following->posts->user`.`username` AS `following.posts.user.username`,
    `following->posts->user`.`password` AS `following.posts.user.password`,
    `following->posts->user`.`created_at` AS `following.posts.user.createdAt`,
    `following->posts->user`.`updated_at` AS `following.posts.user.updatedAt`,
    `following->posts->comments`.`id` AS `following.posts.comments.id`,
    `following->posts->comments`.`post_id` AS `following.posts.comments.postId`,
    `following->posts->comments`.`user_id` AS `following.posts.comments.userId`,
    `following->posts->comments`.`body` AS `following.posts.comments.body`,
    `following->posts->comments`.`created_at` AS `following.posts.comments.createdAt`,
    `following->posts->comments`.`updated_at` AS `following.posts.comments.updatedAt`,
    `following->posts->comments->user`.`id` AS `following.posts.comments.user.id`,
    `following->posts->comments->user`.`name` AS `following.posts.comments.user.name`,
    `following->posts->comments->user`.`username` AS `following.posts.comments.user.username`,
    `following->posts->comments->user`.`password` AS `following.posts.comments.user.password`,
    `following->posts->comments->user`.`created_at` AS `following.posts.comments.user.createdAt`,
    `following->posts->comments->user`.`updated_at` AS `following.posts.comments.user.updatedAt`
FROM
    `users` AS `User`
    LEFT OUTER JOIN (
        `follows` AS `following->Follow`
        INNER JOIN `users` AS `following` ON `following`.`id` = `following->Follow`.`followee_id`
    ) ON `User`.`id` = `following->Follow`.`follower_id`
    LEFT OUTER JOIN `posts` AS `following->posts` ON `following`.`id` = `following->posts`.`user_id`
    LEFT OUTER JOIN `users` AS `following->posts->user` ON `following->posts`.`user_id` = `following->posts->user`.`id`
    LEFT OUTER JOIN `comments` AS `following->posts->comments` ON `following->posts`.`id` = `following->posts->comments`.`post_id`
    LEFT OUTER JOIN `users` AS `following->posts->comments->user` ON `following->posts->comments`.`user_id` = `following->posts->comments->user`.`id`
WHERE
    `User`.`id` = '1230ae30-dc4f-4752-bd84-092956f5c633';

