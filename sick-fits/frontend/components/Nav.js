import Link from 'next/Link';

export default function Nav() {
  return (
    <nav>
      <Link href="/product">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/order">Orders</Link>
      <Link href="/account">Account</Link>
    </nav>
  );
}
