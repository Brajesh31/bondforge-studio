// Compatibility shim: maps a small subset of `@tanstack/react-router`
// onto `react-router-dom`, so existing components keep compiling after
// the migration to a plain Vite SPA.
import type { ComponentProps, ReactNode } from "react";
import { NavLink, useNavigate, Outlet as RDOutlet } from "react-router-dom";

type AnyProps = Record<string, unknown>;

type LinkProps = Omit<ComponentProps<typeof NavLink>, "to"> & {
  to: string;
  params?: AnyProps;
  search?: AnyProps | ((prev: AnyProps) => AnyProps);
  activeProps?: AnyProps;
  inactiveProps?: AnyProps;
  activeOptions?: AnyProps;
  preload?: string;
  from?: string;
  resetScroll?: boolean;
  children?: ReactNode;
};

export function Link({
  to,
  params: _params,
  search: _search,
  activeProps: _activeProps,
  inactiveProps: _inactiveProps,
  activeOptions: _activeOptions,
  preload: _preload,
  from: _from,
  resetScroll: _resetScroll,
  ...rest
}: LinkProps) {
  return <NavLink {...(rest as ComponentProps<typeof NavLink>)} to={to} />;
}

export const Outlet = RDOutlet;

export const HeadContent = () => null;
export const Scripts = () => null;

export function useRouter() {
  const navigate = useNavigate();
  return {
    invalidate: () => {},
    navigate: (opts: { to: string }) => navigate(opts.to),
  };
}

// No-op stubs so any lingering references compile without doing anything.
export function createRootRouteWithContext<_T = unknown>() {
  return (_config?: unknown) => ({}) as unknown;
}
export function createFileRoute(_path: string) {
  return (_config?: unknown) => ({}) as unknown;
}
export function createRootRoute(_config?: unknown) {
  return {} as unknown;
}
