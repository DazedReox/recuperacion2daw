function PostCard({ post }) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-5">

            <h2 className="font-bold text-xl mb-2">
                {post.title}
            </h2>

            <p className="mb-3">
                {post.content}
            </p>

            <small className="text-gray-500">
                Publicado por {post.author}
            </small>

        </div>
    );
}

export default PostCard;