import Link from "next/link";

type propTypes = {
  path: string;
  title: string;
};

function LinkItem({ path, title }: propTypes) {
  return (
    <Link key={title} href={path}>
      <li className="capitalize">{title}</li>
    </Link>
  );
}

export default LinkItem;
