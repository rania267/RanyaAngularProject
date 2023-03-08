package com.example.pi_project.security.Filter;

import com.example.pi_project.security.Constants;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;



public class JWTAuthorization extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        response.addHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        response.addHeader("Access-Control-Allow-Origin", "*");
        response.addHeader("Access-Control-Allow-Headers", "Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization");
        response.addHeader("Access-Control-Expose-Headers", "Access-Control-Allow-Origin, Access-Control-Allow-Credentials,Authorization");
        String jwt = request.getHeader(Constants.HEADE_STRING);




		if (request.getServletPath().equals("/login") || request.getServletPath().equals("/register")) {
			filterChain.doFilter(request, response);
		} else {
			if (request.getMethod().equals("OPTIONS")) {
				response.setStatus(HttpServletResponse.SC_OK);
			} else {
				if (jwt == null || !jwt.startsWith(Constants.TOKEN_PREFEX)) {
					filterChain.doFilter(request, response);
					return;
				}

				try {
					Claims claims = Jwts.parser().setSigningKey(Constants.SECRET)
							.parseClaimsJws(jwt.replace(Constants.TOKEN_PREFEX, "")).getBody();
					String username = claims.getSubject();
					ArrayList<Map<String, String>> roles = (ArrayList<Map<String, String>>) claims.get("roles");
					Collection<GrantedAuthority> authorities = new ArrayList<>();
					roles.forEach(r -> {
						authorities.add(new SimpleGrantedAuthority(r.get("authority")));
					});
					UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
							username, null, authorities);
					SecurityContextHolder.getContext().setAuthentication(authenticationToken);
					filterChain.doFilter(request, response);
				} catch (Exception e) {
					response.setHeader("error-message", e.getMessage());
					response.sendError(HttpServletResponse.SC_FORBIDDEN);
				}

			}

		}

	}

}
